import React from 'react';

export interface LanWineBottleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWineBottleSolid(props: LanWineBottleSolidProps): React.ReactElement;
export default LanWineBottleSolid;
