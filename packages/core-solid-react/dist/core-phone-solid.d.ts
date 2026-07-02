import React from 'react';

export interface CorePhoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePhoneSolid(props: CorePhoneSolidProps): React.ReactElement;
export default CorePhoneSolid;
