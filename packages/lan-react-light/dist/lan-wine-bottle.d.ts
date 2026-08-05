import React from 'react';

export interface LanWineBottleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWineBottle(props: LanWineBottleProps): React.ReactElement;
export default LanWineBottle;
