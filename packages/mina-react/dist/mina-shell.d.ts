import React from 'react';

export interface MinaShellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShell(props: MinaShellProps): React.ReactElement;
export default MinaShell;
