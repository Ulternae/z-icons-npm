import React from 'react';

export interface MinaBrandCodesandboxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandCodesandbox: React.FC<MinaBrandCodesandboxProps>;
export default MinaBrandCodesandbox;
