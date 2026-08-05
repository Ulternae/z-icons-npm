import React from 'react';

export interface LanBurgerGlassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerGlassSolid(props: LanBurgerGlassSolidProps): React.ReactElement;
export default LanBurgerGlassSolid;
