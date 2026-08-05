import React from 'react';

export interface LanChimneyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChimney(props: LanChimneyProps): React.ReactElement;
export default LanChimney;
