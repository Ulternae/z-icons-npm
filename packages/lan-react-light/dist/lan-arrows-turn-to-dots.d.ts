import React from 'react';

export interface LanArrowsTurnToDotsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsTurnToDots(props: LanArrowsTurnToDotsProps): React.ReactElement;
export default LanArrowsTurnToDots;
