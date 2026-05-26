import React from 'react';

export interface LanFluteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFluteThin: React.FC<LanFluteThinProps>;
export default LanFluteThin;
