'use client';

import React, {useRef, useState} from 'react';
import {useServerInsertedHTML} from 'next/navigation';
import {StyleRegistry, createStyleRegistry} from 'styled-jsx';
import {flush} from '@gluestack-ui/nativewind-utils/flush';

export default function StyledJsxRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [jsxStyleRegistry] = useState(() => createStyleRegistry());
  const isServerInserted = useRef(false);

  useServerInsertedHTML(() => {
    if (!isServerInserted.current) {
      isServerInserted.current = true;
      const styles = [jsxStyleRegistry.styles(), flush()];
      jsxStyleRegistry.flush();
      return <>{styles}</>;
    }
  });

  return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>;
}
