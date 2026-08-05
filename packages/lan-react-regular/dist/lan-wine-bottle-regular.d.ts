import React from 'react';

export interface LanWineBottleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWineBottleRegular(props: LanWineBottleRegularProps): React.ReactElement;
export default LanWineBottleRegular;
