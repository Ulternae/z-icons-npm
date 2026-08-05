import React from 'react';

export interface NeoMicrophoneSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMicrophoneSlash(props: NeoMicrophoneSlashProps): React.ReactElement;
export default NeoMicrophoneSlash;
