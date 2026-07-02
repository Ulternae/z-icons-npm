import React from 'react';

export interface CoreMicrophoneSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMicrophoneSlash(props: CoreMicrophoneSlashProps): React.ReactElement;
export default CoreMicrophoneSlash;
