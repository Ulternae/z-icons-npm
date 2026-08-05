import React from 'react';

export interface LanSuperscriptThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSuperscriptThin(props: LanSuperscriptThinProps): React.ReactElement;
export default LanSuperscriptThin;
