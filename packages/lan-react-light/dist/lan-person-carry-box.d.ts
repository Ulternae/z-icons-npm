import React from 'react';

export interface LanPersonCarryBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonCarryBox(props: LanPersonCarryBoxProps): React.ReactElement;
export default LanPersonCarryBox;
