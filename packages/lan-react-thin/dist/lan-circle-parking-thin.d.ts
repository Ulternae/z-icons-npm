import React from 'react';

export interface LanCircleParkingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleParkingThin(props: LanCircleParkingThinProps): React.ReactElement;
export default LanCircleParkingThin;
