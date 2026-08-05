import React from 'react';

export interface LanSquareParkingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareParkingRegular(props: LanSquareParkingRegularProps): React.ReactElement;
export default LanSquareParkingRegular;
