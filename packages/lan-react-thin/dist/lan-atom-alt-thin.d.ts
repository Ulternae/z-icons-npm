import React from 'react';

export interface LanAtomAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAtomAltThin(props: LanAtomAltThinProps): React.ReactElement;
export default LanAtomAltThin;
