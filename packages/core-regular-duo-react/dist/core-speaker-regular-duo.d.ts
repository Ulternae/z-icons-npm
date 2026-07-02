import React from 'react';

export interface CoreSpeakerRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSpeakerRegularDuo(props: CoreSpeakerRegularDuoProps): React.ReactElement;
export default CoreSpeakerRegularDuo;
