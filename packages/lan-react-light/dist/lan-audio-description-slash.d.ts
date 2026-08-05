import React from 'react';

export interface LanAudioDescriptionSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAudioDescriptionSlash(props: LanAudioDescriptionSlashProps): React.ReactElement;
export default LanAudioDescriptionSlash;
