import React from 'react';

export interface LanMicrophoneSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMicrophoneSlash(props: LanMicrophoneSlashProps): React.ReactElement;
export default LanMicrophoneSlash;
