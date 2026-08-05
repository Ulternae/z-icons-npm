import React from 'react';

export interface LanPersonCarryBoxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonCarryBoxThin(props: LanPersonCarryBoxThinProps): React.ReactElement;
export default LanPersonCarryBoxThin;
