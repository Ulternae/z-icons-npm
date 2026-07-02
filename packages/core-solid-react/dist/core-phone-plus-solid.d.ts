import React from 'react';

export interface CorePhonePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePhonePlusSolid(props: CorePhonePlusSolidProps): React.ReactElement;
export default CorePhonePlusSolid;
