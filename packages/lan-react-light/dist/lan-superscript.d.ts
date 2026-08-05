import React from 'react';

export interface LanSuperscriptProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSuperscript(props: LanSuperscriptProps): React.ReactElement;
export default LanSuperscript;
