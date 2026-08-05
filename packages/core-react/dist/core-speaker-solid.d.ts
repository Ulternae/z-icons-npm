import React from 'react';

export interface CoreSpeakerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSpeakerSolid(props: CoreSpeakerSolidProps): React.ReactElement;
export default CoreSpeakerSolid;
