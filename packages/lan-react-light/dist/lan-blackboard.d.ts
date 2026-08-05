import React from 'react';

export interface LanBlackboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlackboard(props: LanBlackboardProps): React.ReactElement;
export default LanBlackboard;
