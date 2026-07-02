import React from 'react';

export interface CoreVoicemailProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreVoicemail(props: CoreVoicemailProps): React.ReactElement;
export default CoreVoicemail;
