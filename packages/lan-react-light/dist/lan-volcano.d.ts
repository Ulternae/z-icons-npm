import React from 'react';

export interface LanVolcanoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolcano(props: LanVolcanoProps): React.ReactElement;
export default LanVolcano;
