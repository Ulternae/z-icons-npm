import React from 'react';

export interface BruGlideGProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGlideG(props: BruGlideGProps): React.ReactElement;
export default BruGlideG;
