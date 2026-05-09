import React from 'react';

export interface MinaShellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShell: React.FC<MinaShellProps>;
export default MinaShell;
