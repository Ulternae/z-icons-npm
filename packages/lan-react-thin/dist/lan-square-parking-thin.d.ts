import React from 'react';

export interface LanSquareParkingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareParkingThin(props: LanSquareParkingThinProps): React.ReactElement;
export default LanSquareParkingThin;
