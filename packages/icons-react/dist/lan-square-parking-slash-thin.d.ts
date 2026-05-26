import React from 'react';

export interface LanSquareParkingSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareParkingSlashThin: React.FC<LanSquareParkingSlashThinProps>;
export default LanSquareParkingSlashThin;
