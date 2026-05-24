import React from 'react';

export interface BruGoogleDriveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGoogleDrive: React.FC<BruGoogleDriveProps>;
export default BruGoogleDrive;
