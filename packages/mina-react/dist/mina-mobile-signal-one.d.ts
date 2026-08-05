import React from 'react';

export interface MinaMobileSignalOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMobileSignalOne(props: MinaMobileSignalOneProps): React.ReactElement;
export default MinaMobileSignalOne;
