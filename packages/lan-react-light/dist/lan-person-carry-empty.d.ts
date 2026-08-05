import React from 'react';

export interface LanPersonCarryEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonCarryEmpty(props: LanPersonCarryEmptyProps): React.ReactElement;
export default LanPersonCarryEmpty;
