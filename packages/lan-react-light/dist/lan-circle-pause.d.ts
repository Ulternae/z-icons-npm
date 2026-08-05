import React from 'react';

export interface LanCirclePauseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePause(props: LanCirclePauseProps): React.ReactElement;
export default LanCirclePause;
