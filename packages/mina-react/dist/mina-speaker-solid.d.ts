import React from 'react';

export interface MinaSpeakerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSpeakerSolid(props: MinaSpeakerSolidProps): React.ReactElement;
export default MinaSpeakerSolid;
