import React from 'react';

export interface BruUbuntuProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruUbuntu(props: BruUbuntuProps): React.ReactElement;
export default BruUbuntu;
