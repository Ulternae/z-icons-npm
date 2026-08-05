import React from 'react';

export interface MinaBrandCodesandboxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandCodesandbox(props: MinaBrandCodesandboxProps): React.ReactElement;
export default MinaBrandCodesandbox;
