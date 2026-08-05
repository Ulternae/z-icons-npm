import React from 'react';

export interface LanDigitalTachographProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDigitalTachograph(props: LanDigitalTachographProps): React.ReactElement;
export default LanDigitalTachograph;
