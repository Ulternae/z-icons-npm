import React from 'react';

export interface LanPersonCarryBoxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonCarryBoxRegular(props: LanPersonCarryBoxRegularProps): React.ReactElement;
export default LanPersonCarryBoxRegular;
