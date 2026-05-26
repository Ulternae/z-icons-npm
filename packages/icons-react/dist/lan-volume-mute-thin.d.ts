import React from 'react';

export interface LanVolumeMuteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeMuteThin: React.FC<LanVolumeMuteThinProps>;
export default LanVolumeMuteThin;
