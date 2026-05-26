import React from 'react';

export interface LanBezierCurveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBezierCurveThin: React.FC<LanBezierCurveThinProps>;
export default LanBezierCurveThin;
