import React from 'react';

export interface LanAtomThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAtomThin(props: LanAtomThinProps): React.ReactElement;
export default LanAtomThin;
