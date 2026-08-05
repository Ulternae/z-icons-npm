import React from 'react';

export interface LanWhistleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWhistle(props: LanWhistleProps): React.ReactElement;
export default LanWhistle;
