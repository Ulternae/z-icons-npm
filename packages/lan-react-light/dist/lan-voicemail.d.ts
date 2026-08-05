import React from 'react';

export interface LanVoicemailProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVoicemail(props: LanVoicemailProps): React.ReactElement;
export default LanVoicemail;
