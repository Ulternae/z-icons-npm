import React from 'react';

export interface LanMotorcycleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMotorcycle(props: LanMotorcycleProps): React.ReactElement;
export default LanMotorcycle;
