import React from 'react';

export interface LanQuidditchBroomBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQuidditchBroomBall: React.FC<LanQuidditchBroomBallProps>;
export default LanQuidditchBroomBall;
