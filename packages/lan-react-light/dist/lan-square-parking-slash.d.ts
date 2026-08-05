import React from 'react';

export interface LanSquareParkingSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareParkingSlash(props: LanSquareParkingSlashProps): React.ReactElement;
export default LanSquareParkingSlash;
