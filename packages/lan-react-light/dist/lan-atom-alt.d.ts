import React from 'react';

export interface LanAtomAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAtomAlt(props: LanAtomAltProps): React.ReactElement;
export default LanAtomAlt;
