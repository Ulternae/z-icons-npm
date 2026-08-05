import React from 'react';

export interface LanBookSpellsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookSpellsSolid(props: LanBookSpellsSolidProps): React.ReactElement;
export default LanBookSpellsSolid;
