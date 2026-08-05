import React from 'react';

export interface LanImagePortraitSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImagePortraitSolid(props: LanImagePortraitSolidProps): React.ReactElement;
export default LanImagePortraitSolid;
