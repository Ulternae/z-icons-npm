import React from 'react';

export interface LanSickleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSickle(props: LanSickleProps): React.ReactElement;
export default LanSickle;
