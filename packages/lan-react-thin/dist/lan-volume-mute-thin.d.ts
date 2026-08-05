import React from 'react';

export interface LanVolumeMuteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeMuteThin(props: LanVolumeMuteThinProps): React.ReactElement;
export default LanVolumeMuteThin;
