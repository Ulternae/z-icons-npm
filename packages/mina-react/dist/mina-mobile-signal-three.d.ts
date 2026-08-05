import React from 'react';

export interface MinaMobileSignalThreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMobileSignalThree(props: MinaMobileSignalThreeProps): React.ReactElement;
export default MinaMobileSignalThree;
